const fs = require("fs");

const fileName = "data.txt";

// Create File
fs.writeFile(fileName, "Smart Utility Toolkit\n", (err) => {

    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("1. File created successfully.");

    // Read File
    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("2. File content:");
        console.log(data);

        // Update File
        fs.appendFile(
            fileName,
            "File updated successfully.\n",
            (err) => {

                if (err) {
                    console.log("Error updating file:", err.message);
                    return;
                }

                console.log("3. File updated successfully.");

                // Read Updated File
                fs.readFile(
                    fileName,
                    "utf8",
                    (err, updatedData) => {

                        if (err) {
                            console.log(
                                "Error reading updated file:",
                                err.message
                            );
                            return;
                        }

                        console.log("4. Updated file content:");
                        console.log(updatedData);

                        // Delete File
                        fs.unlink(fileName, (err) => {

                            if (err) {
                                console.log(
                                    "Error deleting file:",
                                    err.message
                                );
                                return;
                            }

                            console.log(
                                "5. File deleted successfully."
                            );
                        });
                    }
                );
            }
        );
    });
});