# Download CSV with Semicolon

## Overview

**Download CSV with Semicolon** is a Google Sheets extension created to address a common issue: Google Sheets does not natively export CSV files using a semicolon (;) as the delimiter. Many developers and professionals working with CSV files in UTF-8 format need semicolon-separated values (CSV), especially in regions where the semicolon is the standard CSV delimiter.

This extension simplifies the process of exporting Google Sheets to CSV files using semicolons, saving you time and ensuring compatibility with your workflows.

## Features
- Export Google Sheets to CSV files with a semicolon (;) as the delimiter.
- UTF-8 encoding to ensure compatibility with most systems.
- Easy and fast download process directly from Google Sheets.
- Deleted CSV files are stored in your Google Drive trash for up to 30 days, so you can recover them if needed.

## Why This Extension?

CSV files are commonly used for data exchange, especially in development environments. However, Google Sheets doesn't offer a built-in way to export CSVs with a semicolon delimiter, which is frequently required by developers in certain regions. This extension was designed to streamline this process, ensuring that your exported files are properly formatted with semicolons and UTF-8 encoding.

## Installation

To install the extension:
Unfortunately google workspace marketplace have too many requierements to add an a new Add-On to the marketplace, so here is the manual process:
1. Create a spreadsheet in your google sheets that you will use everytime that you want to export to CSV with semicolon.

2. Open that spreadsheet, and just for the first time go to "Extensions" -> "Apps Scripts"
![](https://i.imgur.com/BxAlaWV.png)

3. Copy and paste the `Code.gs` file from this repo to your app scripts and create the `DownloadDialog` HTML file and do the same
![](https://i.imgur.com/IrqdFOK.png)

4. Then, just one, go to `Code.gs` in apps scripts and select the function `showDownloadDialog` and click "RUN"
![](https://i.imgur.com/RrOvH5a.png)

5. Accept all de requirements to use your google drive for this app that you are creating right now
![](https://i.imgur.com/3xVkyTF.png)
![](https://i.imgur.com/laDaaLC.png)

You will receive and email notifying you about that!

6. After all, check if it shows "Execution completed":
![](https://i.imgur.com/BPs4rj9.png)

7. Go back to your spreadsheet browser tab and check te box:
![](https://i.imgur.com/AooPMwb.png)

8. Done! After refreshing one your current browser tab, Now, every time that you use this specific spreadsheet, will be showing the button in "Extensions" MENU to use the app scripts to download CSV:
![](https://i.imgur.com/Xx6PZQP.png)

## How to Use

![](https://i.imgur.com/6LjE0sm.png)
![](https://i.imgur.com/fSQxgCu.png)
![](https://i.imgur.com/I9DokHh.png)

## Problems 
Please open a issue if you have any problem
