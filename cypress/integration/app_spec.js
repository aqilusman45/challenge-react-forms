describe("Sign Up", () => {

  // test cases for name field

  it("Check error on name field left empty", () => {
    cy.visit("/");

    cy.get('input[name="name"]').click().blur();

    cy.get("[data-cy=field-error]").should("contain", "Name Required");
  });

  it("Enter name in empty name field and remove error", () => {
    cy.visit("/");

    cy.get('input[name="name"]').click().blur();

    cy.get("[data-cy=field-error]").should("contain", "Name Required");

    cy.get('input[name="name"]').click().type("John Doe").blur();

    cy.get("[data-cy=field-error]").should("contain", "");
  });

  // test cases for email field

  it("Check error for empty email field", () => {
    cy.visit("/");

    cy.get('input[name="email"]').click().blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Email");
  });

  it("Check error for invalid email", () => {
    cy.visit("/");

    cy.get('input[name="email"]').click().type("example.com").blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Email");
  });

  it("Enter valid email for email field with error", () => {
    cy.visit("/");

    cy.get('input[name="email"]').click().type("example.com").blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Email");

    cy.get('input[name="email"]')
      .click()
      .clear()
      .type("test@example.com")
      .blur();

    cy.get("[data-cy=field-error]").should("contain", "");
  });

  it("Enter valid email for email field with error", () => {
    cy.visit("/");

    cy.get('input[name="email"]').click().type("example.com").blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Email");

    cy.get('input[name="email"]')
      .click()
      .clear()
      .type("test@example.com")
      .blur();

    cy.get("[data-cy=field-error]").should("contain", "");
  });

  // test cases for age field

  it("Check error for empty age field", () => {
    cy.visit("/");

    cy.get('input[name="age"]').click().blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Age");
  });

  it("Check error for age 200", () => {
    cy.visit("/");

    cy.get('input[name="age"]').click().type(200).blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Age");
  });

  it("Check error for age above 200", () => {
    cy.visit("/");

    cy.get('input[name="age"]').click().type(220).blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Age");
  });

  it("Check error for age 0", () => {
    cy.visit("/");

    cy.get('input[name="age"]').click().type(0).blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Age");
  });

  it("Check error for age -10", () => {
    cy.visit("/");

    cy.get('input[name="age"]').click().type(-10).blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Age");
  });

  it("Enter valid age for age field with error", () => {
    cy.visit("/");

    cy.get('input[name="age"]').click().type(200).blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Age");

    cy.get('input[name="age"]').click().clear().type(60);

    cy.get("[data-cy=field-error]").should("contain", "");
  });

  // test cases for password field

  it("Enter password without uppercase character", () => {
    cy.visit("/");

    cy.get('input[name="password"]').click().type("@dm!nuser@123").blur();

    cy.get("[data-cy=field-error]").should("contain", "Weak Password");
  });

  it("Enter password without lowercase character", () => {
    cy.visit("/");

    cy.get('input[name="password"]').click().type("@DM!NUSER@123").blur();

    cy.get("[data-cy=field-error]").should("contain", "Weak Password");
  });

  it("Enter password without symbols", () => {
    cy.visit("/");

    cy.get('input[name="password"]').click().type("adminUser123").blur();

    cy.get("[data-cy=field-error]").should("contain", "Weak Password");
  });

  it("Enter password without numbers", () => {
    cy.visit("/");

    cy.get('input[name="password"]').click().type("@dm!nUser@$%^").blur();

    cy.get("[data-cy=field-error]").should("contain", "Weak Password");
  });

  it("Enter valid password for password field with error", () => {
    cy.visit("/");

    cy.get('input[name="password"]').click().type("adminuser").blur();

    cy.get("[data-cy=field-error]").should("contain", "Weak Password");

    cy.get('input[name="password"]').click().type("@dm!nUser@123").blur();

    cy.get("[data-cy=field-error]").should("contain", "");
  });

  // test cases for phone number

  it("Enter phone number below 6 numbers", () => {
    cy.visit("/");

    cy.get('input[name="phoneNumber"]').click().type("12345").blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Phone Number");
  });

  it("Enter phone number below above 17 numbers", () => {
    cy.visit("/");

    cy.get('input[name="phoneNumber"]')
      .click()
      .type("012345678901234567")
      .blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Phone Number");
  });

  it("Enter valid phone number after error", () => {
    cy.visit("/");

    cy.get('input[name="phoneNumber"]')
      .click()
      .type("012345678901234abc")
      .blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid Phone Number");

    cy.get('input[name="phoneNumber"]')
      .click()
      .clear()
      .type("012345678")
      .blur();

    cy.get("[data-cy=field-error]").should("contain", "");
  });

  // test cases for url

  it("Enter invalid url", () => {
    cy.visit("/");

    cy.get('input[name="homepage"]').click().type("https://github").blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid URL");
  });

  it("Enter valid url post error", () => {
    cy.visit("/");

    cy.get('input[name="homepage"]').click().type("https://github").blur();

    cy.get("[data-cy=field-error]").should("contain", "Invalid URL");

    cy.get('input[name="homepage"]')
      .click()
      .clear()
      .type("https://github.com")
      .blur();

    cy.get("[data-cy=field-error]").should("contain", "");
  });

  // submit button test

  it("Check default state for submit button", () => {
    cy.visit("/");

    cy.get('input[type="submit"]')
      .should("be.disabled")
      .should("has.value", "Submit");
  });

  it("Check default value for submit button", () => {
    cy.visit("/");

    cy.get('input[type="submit"]')
      .should("be.disabled")
      .should("has.value", "Submit");
  });

  it("Check value to be 'Saving...' after submit", () => {
    cy.visit("/");

    cy.get('input[name="name"]').click().type("John Doe");

    cy.get('input[name="email"]').click().type("johndoe@example.com");

    cy.get('input[name="age"]').click().type(55);

    cy.get('input[name="phoneNumber"]').click().type("800-555-1212");

    cy.get('input[name="password"]').click().type("@dm!nUser@123");

    cy.get('input[name="homepage"]').click().type("https://github.com");

    cy.get('input[type="submit"]')
      .click()
      .should("be.disabled")
      .should("has.value", "Saving...");
  });

  it("Check value for success case after submit", () => {
    cy.visit("/");

    cy.get('input[name="name"]').click().type("John Doe");

    cy.get('input[name="email"]').click().type("johndoe@example.com");

    cy.get('input[name="age"]').click().type(55);

    cy.get('input[name="phoneNumber"]').click().type("800-555-1212");

    cy.get('input[name="password"]').click().type("@dm!nUser@123");

    cy.get('input[name="homepage"]').click().type("https://github.com");

    cy.get('input[type="submit"]')
      .click()
      .should("be.disabled")
      .should("has.value", "Saved!");
  });

  // test cases for sign up process

  it("Adds a person to the list", () => {
    cy.visit("/");

    cy.get('input[name="name"]').click().type("John Doe");

    cy.get('input[name="email"]').click().type("johndoe@example.com");

    cy.get('input[name="age"]').click().type(55);

    cy.get('input[name="phoneNumber"]').click().type("800-555-1212");

    cy.get('input[name="password"]').click().type("@dm!nUser@123");

    cy.get('input[name="homepage"]').click().type("https://github.com");

    cy.get('input[type="submit"]').click();

    cy.get("[data-cy=user-table]", { timeout: 5000 }).children().should("have.length", 1);
  });

  it("Loads previously added persons to the list", () => {
    cy.visit("/");

    cy.get('input[name="name"]').click().type("John Doe");

    cy.get('input[name="email"]').click().type("johndoe@example.com");

    cy.get('input[name="age"]').click().type(55);

    cy.get('input[name="phoneNumber"]').click().type("800-555-1212");

    cy.get('input[name="password"]').click().type("@dm!nUser@123");

    cy.get('input[name="homepage"]').click().type("https://github.com");

    cy.get('input[type="submit"]').click();

    cy.get("[data-cy=user-table]", { timeout: 5000 }).children().should("have.length", 1);

    cy.reload();
    
    cy.get("[data-cy=user-table]", { timeout: 5000 }).children().should("have.length", 1);
  });
});
