//Complete siguiendo las instrucciones del taller
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to losestudiantes home screen', () => {
  browser.url('/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(5000);
  $('button=Ingresar').click();
});

When('I fill a wrong email and password', () => {
  var cajaLogIn = $('.cajaLogIn');

  var mailInput = cajaLogIn.$('input[name="correo"]');
  mailInput.click();
  mailInput.setValue('wrongemail@example.com');

  var passwordInput = cajaLogIn.$('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue('123467891');
});

When('I try to login', () => {
  var cajaLogIn = $('.cajaLogIn');
  cajaLogIn.$('button=Ingresar').click();
});

Then('I expect to not be able to login', () => {
  $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {
  var cajaLogIn = $('.cajaLogIn');

 var mailInput = cajaLogIn.$('input[name="correo"]');
 mailInput.click();
 mailInput.keys(email);

 var passwordInput = cajaLogIn.$('input[name="password"]');
 passwordInput.click();
 passwordInput.keys(password)
});

Then('I expect to see {string}', error => {
 $('.aviso.alert.alert-danger').waitForDisplayed(5000);
 var alertText = browser.$('.aviso.alert.alert-danger').getText();
 expect(alertText).to.include(error);
});

Then('I expect to see button cuenta', () => {
 $('button[id="cuenta"]').waitForDisplayed(5000);
 if($('button[id="cuenta"]').isDisplayed()) {
    $('button[id="cuenta"]').click();
  }
});

When(/^I fill with (.*) (.*) (.*) (.*)$/, (name, lastname, email, pass) => {
  var cajaSignUp = $('.cajaSignUp');

  var nameInput = cajaSignUp.$('input[name="nombre"]');
  nameInput.click();
  nameInput.setValue(name);
  
  var lastnameInput = cajaSignUp.$('input[name="apellido"]');
  lastnameInput.click();
  lastnameInput.setValue(lastname);
  
  var mailInput = cajaSignUp.$('input[name="correo"]');
  mailInput.click();
  mailInput.keys(email);

  var passwordInput = cajaSignUp.$('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue(pass);
    
});

When('I try to acept conditions', () => {
	var cajaSignUp = $('.cajaSignUp');
	
    var aceptaInput = cajaSignUp.$('input[name="acepta"]');
	aceptaInput.click();
});

When('I try to register', () => {
  var cajaSignUp = $('.cajaSignUp');
  cajaSignUp.$('button=Registrarse').click();
});

Then('I expect to see error input',() => {
	expect($('.has-error').isDisplayed());
});

When('I select to 16 index', () => {
  var cajaSignUp = $('.cajaSignUp');
  var selectProgram = cajaSignUp.$('select[name="idPrograma"]');
  selectProgram.click();
  selectProgram.selectByIndex(16);
});

Then('I expect to see button ok', () => {
 $('button=Ok').waitForDisplayed(5000);
 if($('button=Ok').isDisplayed()) {
    $('button=Ok').click();
  }
});
