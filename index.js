const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const PORT = process.env.PORT || 5016;
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Transcaspian",
			version: "1.0.0",
			description: "Transcaspian API",
		},
		servers: [
			{
				url: "http://192.168.57.11:5014",
			},
		],
	},
	apis: ["./routes/*.yaml"],
};
const specs = swaggerJsDoc(options);
const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
