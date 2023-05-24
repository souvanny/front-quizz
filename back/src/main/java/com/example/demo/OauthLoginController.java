package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import com.example.demo.config.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
public class OauthLoginController {

    @Autowired JwtTokenUtil jwtUtil;

    @RequestMapping("/oauthlogin")
    public ModelAndView oauthloginPage() {

        String accessToken = jwtUtil.generateAccessToken();

        System.out.println("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
        System.out.println("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
        System.out.println(accessToken);
        System.out.println("--");

        String message = "oauthlogin popipopipopipopipopi.";
        return new ModelAndView("oauthloginPage", "message", message);
    }
}