package com.employee.automation.pages;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class EmployeePage {


    WebDriver driver;
    WebDriverWait wait;


    public EmployeePage(WebDriver driver) {

        this.driver = driver;

        wait = new WebDriverWait(
                driver,
                Duration.ofSeconds(10)
        );
    }



    // =======================
    // LOCATORS
    // =======================


    By employeeMenu =
By.xpath("//*[contains(text(),'Employees')]");


    By addEmployeeBtn =
By.xpath("//button[contains(.,'Add Employee')]");



    // Search

    By searchBox =
            By.xpath("//input[@placeholder='Search Employee...']");


    By employeeResult =
            By.xpath("//table//tbody//tr[1]//h4");



    // Edit

    By editBtn =
            By.xpath("(//button[contains(@id,'editEmployee')])[1]");


    By updateBtn =
            By.xpath("//button[@type='submit']");



    // Employee Form

    By employeeId =
            By.id("employeeId");


    By employeeName =
            By.id("employeeName");


    By employeeEmail =
            By.id("employeeEmail");


    By employeePassword =
            By.id("employeePassword");


    By employeePhone =
            By.id("employeePhone");


    By employeeDepartment =
            By.id("employeeDepartment");


    By employeeDesignation =
            By.id("employeeDesignation");


    By employeeSalary =
            By.id("employeeSalary");



    By saveBtn =
            By.xpath("//button[@type='submit']");





    // =======================
    // OPEN EMPLOYEE PAGE
    // =======================


    public void openEmployeePage() {


        wait.until(
                ExpectedConditions.elementToBeClickable(employeeMenu)
        ).click();


    }





    // =======================
    // OPEN ADD EMPLOYEE FORM
    // =======================


    public void openAddEmployeeForm() {

    wait.until(
        ExpectedConditions.elementToBeClickable(employeeMenu)
    ).click();


    wait.until(
        ExpectedConditions.elementToBeClickable(addEmployeeBtn)
    ).click();


    wait.until(
        ExpectedConditions.visibilityOfElementLocated(employeeId)
    );
}





    // =======================
    // FILL EMPLOYEE FORM
    // =======================


    public void fillEmployeeForm(
            String id,
            String name,
            String email,
            String password,
            String phone,
            String department,
            String designation,
            String salary
    ) {



        driver.findElement(employeeId)
                .sendKeys(id);



        driver.findElement(employeeName)
                .sendKeys(name);



        driver.findElement(employeeEmail)
                .sendKeys(email);



        driver.findElement(employeePassword)
                .sendKeys(password);



        driver.findElement(employeePhone)
                .sendKeys(phone);



        driver.findElement(employeeDepartment)
                .sendKeys(department);



        driver.findElement(employeeDesignation)
                .sendKeys(designation);



        driver.findElement(employeeSalary)
                .sendKeys(salary);


    }





    // =======================
    // SAVE EMPLOYEE
    // =======================


    public void clickSave() {


        wait.until(
                ExpectedConditions.elementToBeClickable(saveBtn)
        ).click();

    }





    // =======================
    // SEARCH EMPLOYEE
    // =======================


    public void searchEmployee(String name) {


        wait.until(
                ExpectedConditions.visibilityOfElementLocated(searchBox)
        ).clear();



        driver.findElement(searchBox)
                .sendKeys(name);



        try {

            Thread.sleep(2000);

        }
        catch(Exception e){

        }


    }







    // =======================
    // GET EMPLOYEE NAME
    // =======================


    public String getFirstEmployeeName() {


        return wait.until(
                ExpectedConditions.visibilityOfElementLocated(employeeResult)
        )
        .getText();

    }






    // =======================
    // CLICK EDIT
    // =======================


  public void clickEdit() {

    System.out.println("Current URL : " + driver.getCurrentUrl());

    System.out.println("Page Title : " + driver.getTitle());

    System.out.println("Search Result Count : " +
            driver.findElements(By.xpath("//table//tbody//tr")).size());

    System.out.println("Edit Button Count : " +
            driver.findElements(By.id("editEmployee")).size());

    System.out.println(driver.getPageSource());

    wait.until(ExpectedConditions.elementToBeClickable(By.id("editEmployee"))).click();
}





    // =======================
    // UPDATE EMPLOYEE NAME
    // =======================


    public void updateEmployeeName(String name) {



        wait.until(
                ExpectedConditions.visibilityOfElementLocated(employeeName)
        )
        .clear();



        driver.findElement(employeeName)
                .sendKeys(name);


    }






    // =======================
    // UPDATE BUTTON
    // =======================


    public void clickUpdate() {


        wait.until(
                ExpectedConditions.elementToBeClickable(updateBtn)
        )
        .click();


    }


}