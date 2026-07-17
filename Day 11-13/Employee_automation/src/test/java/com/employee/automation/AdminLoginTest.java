package com.employee.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class AdminLoginTest {

    public static void main(String[] args) throws InterruptedException {

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        // Open Application
        driver.get("http://localhost:5173");

        Thread.sleep(2000);

        // Click Admin Login
        driver.findElement(By.xpath("//button[contains(text(),'Admin Login')]")).click();

        Thread.sleep(2000);

        // Enter Email
        driver.findElement(By.id("email")).sendKeys("hartyof19196@gmail.com");

        // Enter Password
        driver.findElement(By.id("password")).sendKeys("rakshitha@123");

        Thread.sleep(1000);

        // Click Login
        driver.findElement(By.id("loginBtn")).click();

        Thread.sleep(3000);

        System.out.println("Admin Login Automation Completed");

        driver.quit();
    }
}