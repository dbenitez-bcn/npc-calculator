#!/bin/bash

# Path to the newLocales.json
NEW_LOCALES="./newLocales.json"

# Path to the directory containing the locale files
LOCALES_DIR="./src/locales"

# Check if jq is installed (for processing JSON)
if ! command -v jq &> /dev/null; then
    echo "jq is required but it's not installed. Install it with 'brew install jq'"
    exit 1
fi

# Iterate over each first-level key in newLocales.json
for key in $(jq -r 'keys[]' "$NEW_LOCALES"); do
    # Path to the existing locale file
    FILE_PATH="$LOCALES_DIR/$key.json"

    # Check if the file exists
    if [[ -f "$FILE_PATH" ]]; then
        # Merge the new content into the existing JSON file
        jq --argjson newContent "$(jq -r --arg key "$key" '.[$key]' "$NEW_LOCALES")" \
           '. * $newContent' \
           "$FILE_PATH" > "$FILE_PATH.tmp" && mv "$FILE_PATH.tmp" "$FILE_PATH"
        echo "Merged content into $FILE_PATH"
    else
        echo "File $FILE_PATH does not exist, skipping..."
    fi
done
