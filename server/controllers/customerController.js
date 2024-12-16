/**
 * GET /  
 * Homepage
**/

exports.homepage = (req, res) => {
    try {
      const locals = {
        title: "NodeJs",
        description: "Free NodeJS User Management System",
      };
      res.render("index", locals);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

