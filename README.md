Created bookmarklet to obtain IDs from Salesforce Dev Console and download to file
- Search table rows for IDs in log files
- Look for line that contains keyword with generated IDs
- Split debug line to only return IDs, and then split IDs to create array...
- ..that can be used to create a CSV file that then creates an attribute to download generated CSV file
