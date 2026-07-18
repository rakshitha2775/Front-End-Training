package com.cucumber.stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginSteps {

    WebDriver driver;

    @Given("User opens the login page")
    public void user_opens_the_login_page() {

        WebDriverManager.chromedriver().setup();

        driver = new ChromeDriver();
        driver.manage().window().maximize();

        // CHANGE THIS TO YOUR ACTUAL LOGIN PAGE
        driver.get("http://localhost:5173/admin-login");

        // If your app opens login from home page instead, use:
        // driver.get("http://localhost:5173/");
        // driver.findElement(By.linkText("Admin Login")).click();
    }

    @When("user enters the username {string}")
    public void user_enters_the_username(String user) {

        driver.findElement(By.id("email")).clear();
        driver.findElement(By.id("email")).sendKeys(user);
    }

    @When("user enters the password {string}")
    public void user_enters_the_password(String pass) {

        driver.findElement(By.id("password")).clear();
        driver.findElement(By.id("password")).sendKeys(pass);
    }

    @Then("click the Login Button")
    public void click_the_login_button() throws InterruptedException {

        driver.findElement(By.id("loginBtn")).click();

        Thread.sleep(3000);

        driver.quit();
    }
}