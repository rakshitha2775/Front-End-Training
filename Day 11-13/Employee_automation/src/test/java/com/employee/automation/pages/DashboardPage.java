package com.employee.automation.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DashboardPage {

    WebDriver driver;

    public DashboardPage(WebDriver driver) {
        this.driver = driver;
    }

    // Header
    By welcomeAdmin = By.xpath("//h1[contains(text(),'Welcome Admin')]");
    By dashboardOverview = By.xpath("//p[contains(text(),'Dashboard Overview')]");

    // Dashboard Cards
    By employeesCard = By.xpath("//p[text()='Employees']");
    By activeEmployeesCard = By.xpath("//p[text()='Active Employees']");
    By departmentsCard = By.xpath("//p[text()='Departments']");
    By payrollCard = By.xpath("//p[text()='Payroll']");

    // Charts
    By attendanceChart = By.xpath("//h3[contains(text(),'Attendance Overview')]");
    By departmentChart = By.xpath("//h3[contains(text(),'Department Distribution')]");

    // Recent Employees
    By recentEmployees = By.xpath("//h2[contains(text(),'Recent Employees')]");

    public boolean isWelcomeDisplayed() {
        return driver.findElement(welcomeAdmin).isDisplayed();
    }

    public boolean isOverviewDisplayed() {
        return driver.findElement(dashboardOverview).isDisplayed();
    }

    public boolean isEmployeesCardDisplayed() {
        return driver.findElement(employeesCard).isDisplayed();
    }

    public boolean isActiveEmployeesCardDisplayed() {
        return driver.findElement(activeEmployeesCard).isDisplayed();
    }

    public boolean isDepartmentsCardDisplayed() {
        return driver.findElement(departmentsCard).isDisplayed();
    }

    public boolean isPayrollCardDisplayed() {
        return driver.findElement(payrollCard).isDisplayed();
    }

    public boolean isAttendanceChartDisplayed() {
        return driver.findElement(attendanceChart).isDisplayed();
    }

    public boolean isDepartmentChartDisplayed() {
        return driver.findElement(departmentChart).isDisplayed();
    }

    public boolean isRecentEmployeesDisplayed() {
        return driver.findElement(recentEmployees).isDisplayed();
    }
}