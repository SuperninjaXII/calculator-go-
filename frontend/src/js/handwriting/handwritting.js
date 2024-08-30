const editorElement = document.getElementById("editor");

const editor = new iink.Editor(editorElement, {
	configuration: {
		server: {
			protocal: "REST",
			applicationKey: "9b3f6f32-9b70-4dbd-9e46-e4e7eda793c7",
			hmacKey: "c69d1492-d59e-44b0-bfa9-a83fa5a3733c",
		},
		recognition: {
			type: "MATH",
		},
	},
});
editor.initialize();

document.querySelector("#convert").addEventListener("click", () => {
	editor.convert();
});

document.querySelector("#clearCanvas").addEventListener("click", async () => {
	editor.clear();
});

document.querySelector("#undo").addEventListener("click", () => {
	editor.undo();
});

document.querySelector("#redo").addEventListener("click", () => {
	editor.redo();
});
