#!/bin/bash

# Directorios
SRC_DIR="./src/assets/icons"
DEST_DIR="./src/components/icons"
ICONSETS_FILE="./src/iconsets/custom.ts"

# Comprobar si los directorios existen
if [ ! -d "$SRC_DIR" ]; then
  echo "El directorio de origen '$SRC_DIR' no existe."
  exit 1
fi

if [ ! -f "$ICONSETS_FILE" ]; then
  echo "El archivo '$ICONSETS_FILE' no existe."
  exit 1
fi

# Iterar sobre cada fichero en el directorio SRC_DIR
for FILE in "$SRC_DIR"/*; do
  if [ -f "$FILE" ]; then
    # Obtener el nombre del fichero sin la ruta y sin la extensión
    FILE_NAME=$(basename "$FILE")
    BASE_NAME="${FILE_NAME%.*}"
    
    # Crear la nueva ruta con la extensión .vue
    NEW_FILE="$DEST_DIR/$BASE_NAME.vue"
    
    # Añadir <template> al principio y </template> al final del fichero
    (echo "<template>"; cat "$FILE"; echo "</template>") > "$NEW_FILE"

    # Eliminar fichero
    rm $FILE
    
    # Añadir la línea de importación al principio de iconsets/custom.ts
    sed -i '' "1i\\
import $BASE_NAME from '~/components/icons/$BASE_NAME.vue';
" "$ICONSETS_FILE"
    
    # Añadir la línea con el nombre del fichero en la penúltima línea de iconsets/custom.ts
    TOTAL_LINES=$(wc -l < "$ICONSETS_FILE")
    let LINE_NUMBER=TOTAL_LINES-1
    sed -i '' "${LINE_NUMBER}i\\
    $BASE_NAME,
" "$ICONSETS_FILE"

    echo "Archivo procesado: $NEW_FILE"
  fi
done

echo "Operaciones completadas con éxito."
