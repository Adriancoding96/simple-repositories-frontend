<script lang="ts">

  let file: File;
  let fileName: string = "";
  let fileContent: string = "";
  const acceptedExtensions: string[] = [".cpp", ".rs", ".java", ".js", ".ts", ".html", ".css", ".svelte", ".xml", ".lua", ".json"];
     

  function handleFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if(input.files === null) {
      throw new Error("Input element is null");
    }
    if(!input.files && input.files < 1 && input.files > 1) {
      throw new Error("Error uploading file");
    }
    file = input.files[0];
    displayFile(file);
    }

    function displayFile(file: File) {
        if (!file) {
          throw new Error("Cannot display file content because file is null");
        }
        fileName = file.name;
        const fileReader = new FileReader();
        fileReader.onload = () => {
          fileContent = fileReader.result as string;
          console.log(fileContent);
        };
        fileReader.readAsText(file);
      }

</script>

<div class="flex items-center justify-center h-screen">
  <div class="bg-white min-w-128 min-h-144 rounded">
    <div class="w-full bg-yellow-dark rounded-t flex min-h-10">
      <div class="w-1/2">
        <h1 class="p-2 text-white font-bold">{fileName}</h1>
      </div>
      <div class="w-1/2 flex justify-end items-center">
        <form>
          <div class="group flex"></div>
            <label for="file" class="text-white pr-4 cursor-pointer">Upload File</label>
          <input type="file" id="file" name="fileToUpload" style="display:none;" on:change={handleFileUpload}  required />
        </form>

      </div>
    </div>
    <div class="p-4">
      <p class="whitespace-pre-wrap">{fileContent}</p>
    </div>

  </div>
</div>
