package com.employee.automation.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.Alert;

public class LoginPage {

    WebDriver driver;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    // Locators
    By adminLoginBtn = By.linkText("Admin Login");
    By email = By.id("email");
    By password = By.id("password");
    By loginBtn = By.id("loginBtn");

    // Click Admin Login
    public void clickAdminLogin() {
        driver.findElement(adminLoginBtn).click();
    }

    // Enter Email
    public void enterEmail(String emailId) {
        driver.findElement(email).clear();
        driver.findElement(email).sendKeys(emailId);
    }

    // Enter Password
    public void enterPassword(String pass) {
        driver.findElement(password).clear();
        driver.findElement(password).sendKeys(pass);
    }

    // Click Login
    public void clickLogin() {
        driver.findElement(loginBtn).click();
    }

    // Complete Login
   public void login(String emailId, String pass) throws InterruptedException {

    clickAdminLogin();

    enterEmail(emailId);

    enterPassword(pass);

    clickLogin();

    Thread.sleep(2000);

    Alert alert = driver.switchTo().alert();

    System.out.println(alert.getText());

    alert.accept();
}
}