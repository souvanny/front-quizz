package com.example.demo;

import com.example.demo.model.CustomOAuth2User;
import com.example.demo.service.CustomOAuth2UserService;
import com.example.demo.service.UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import java.io.IOException;
import org.springframework.security.core.Authentication;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        System.out.println("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        System.out.println("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        System.out.println("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        System.out.println("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        System.out.println("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        System.out.println("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        System.out.println("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        System.out.println("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");

        http
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers(new AntPathRequestMatcher("/oauthlogin")).permitAll()
                        .requestMatchers(new AntPathRequestMatcher("/error")).permitAll()
                        .anyRequest().authenticated()
                )
                .oauth2Login(oauth2 -> {
                    oauth2.loginPage("/oauthlogin");
                    oauth2.userInfoEndpoint((obj) -> {
                        obj.userService(oauthUserService);
                    });
                    oauth2.successHandler(new AuthenticationSuccessHandler() {

                        @Override
                        public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                                            Authentication authentication) throws IOException, ServletException {
                            System.out.println("AuthenticationSuccessHandler invoked *************************************************");
                            System.out.println("AuthenticationSuccessHandler invoked *************************************************");
                            System.out.println("Authentication name: " + authentication.getName());
                            CustomOAuth2User oauthUser = (CustomOAuth2User) authentication.getPrincipal();
                            System.out.println("oauthUser email: " + oauthUser.getEmail());
//
//                            userService.processOAuthPostLogin(oauthUser.getEmail());
//
//						response.sendRedirect("/list");
                        }
                    });

                    oauth2.failureHandler((request, response, exception) -> {
                        System.out.println("failureHandler invoked *************************************************");
                        System.out.println("failureHandler invoked *************************************************");
//                        request.getSession().setAttribute("error.message", exception.getMessage());
//                        handler.onAuthenticationFailure(request, response, exception);
                    });
                })
        ;

        return http.build();



    }

    @Autowired
    private CustomOAuth2UserService oauthUserService;

    @Autowired
    private UserService userService;
}