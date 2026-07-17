package com.employee.automation.tests;

import org.testng.annotations.Test;

import com.employee.automation.base.BaseTest;
import com.employee.automation.pages.LoginPage;

public class LoginTest extends BaseTest {

    @Test
    public void adminLoginTest() throws InterruptedException {

        LoginPage loginPage = new LoginPage(driver);

        // Use your actual credentials here
        loginPage.login(
            "rakshitharamesh2027@gmail.com",
            "rakshitha@1234"
        );

        Thread.sleep(5000);

        System.out.println("Current URL: " + driver.getCurrentUrl());
        System.out.println("Page Title: " + driver.getTitle());
    }
}