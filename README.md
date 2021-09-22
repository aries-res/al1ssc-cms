# Aditya-L1 Science Support Cell: CMS

This is a [Strapi](https://strapi.io/) application for the CMS (Content Management System) of the Aditya-L1 Science Support Cell (website).

## Local Setup

### Pre-requisites

- LINUX or MacOS operating system with Git installed
- LTS version of Node.js with yarn installed. For detailed instructions on how to do so, see [pre-requisites of al1ssc-client](https://github.com/aries-res/al1ssc-client#pre-requisites) that are exact same.
- MySQL v5.7 (follow [installation guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) in MySQL docs)

### Setting up project

1. Clone the repository to your machine:

   ```bash
   git clone https://github.com/aries-res/al1ssc-cms.git
   cd al1ssc-cms

   ```

2. Install all dependencies of the project:

   ```bash
   yarn
   ```

3. Launch the [MySQL command-line client](https://dev.mysql.com/doc/refman/5.7/en/mysql.html) in your terminal and create a new empty database that will be used with this project. Exit the MySQL client.

4. Setup enviornment variables necessary to run the project:

   1. Copy the contents of `.env.example` in a `.env` file at the root of project.

   2. In the `.env` file, set the value of `ADMIN_JWT_SECRET` to a random string. It's recommended to generate it by running following command in your terminal:

      ```bash
      node -e "console.log(require('crypto').randomBytes(24).toString('base64'));"
      ```

   3. Set the `DATABASE_NAME` to the name of database you created earlier and `DATABASE_USERNAME`, `DATABASE_PASSWORD` to username, password you used to create database respectively.

   4. (Optional) Uncomment any commented variables and set a suitable value if you want to override the default value used for it.

5. Run the project in development mode (with auto-reload enabled):

   ```bash
   yarn develop
   ```

   > Note: When running 1st time, it will take some time to build the admin panel. And after admin panel is launched, you'll be asked to create 1st admin user. Note the email and pasword you decide to use for future logins.

6. Go to the "Content-Types Builder" in sidebar, and update the content types (collection types, single types, or components). Refer to [this doc](https://strapi.io/documentation/user-docs/latest/content-types-builder/introduction-to-content-types-builder.html) to understand how to do so.

   If you need to add content, refer to [user guide](https://github.com/aries-res/al1ssc-cms/blob/master/user-guide.md) but remember to enter minimal content only to test the functionality because it won't go in production database.

<!-- TODO:
## Making client-side affecting changes

No tests at the moment, gotta connect with front-end and check if it breaks website or not. If needed change client code.

Only model changes must be made, content not gonna be saved anyways. Just enough that works with front-end
Images won't be saved -->
