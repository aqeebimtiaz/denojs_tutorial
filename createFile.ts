const encoder = new TextEncoder();

const greetText = encoder.encode("Hello!\nHola!\n");

await Deno.writeFile("greet.txt", greetText);
