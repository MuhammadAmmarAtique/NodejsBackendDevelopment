import cron from "node-cron";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//1) getting invoices from invoices.json file and storing it in invoicesData variable
const invoices = await import("../../data/invoice.json", {
  assert: { type: "json" },
});
let invoicesData = invoices.default;

// 2) Moving paid invoices from invoice.json to archive.json file using this method
const archiveInvoicesTask = () => {
  try {
    const paidInvoices = invoicesData.filter(
      (invoice) => invoice.status === "paid"
    );
    // removing paid invoices from "invoicesData" Array using splice method
    if (paidInvoices.length > 0) {
      paidInvoices.forEach((item) => {
        invoicesData.splice(
          invoicesData.findIndex((elem) => elem.status === item.status),
          1
        );
      });
    }
    // overwriting "invoicesData" in invoice.json file
    fs.writeFileSync(
      path.join(__dirname, "../../", "data", "invoice.json"),
      JSON.stringify(invoicesData, null, 2), // Pretty print the JSON
      "utf-8"
    );

    // now pushing paid invoices in archive.json file

    fs.writeFileSync(
      path.join(__dirname, "../../", "data", "archive.json"),
      JSON.stringify(paidInvoices, null, 2), // Pretty print the JSON
      "utf-8"
    );

    console.log("Successfully Archieved Invoices Task!");
  } catch (error) {
    console.log("Error in Archieving invoices :::", error);
  }
};

// Schedule the task to run every minute
cron.schedule("* * * * *", archiveInvoicesTask);
