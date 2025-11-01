export const bios = [
	'pansexual',
	'AlexTanukii',
	'Alekuso',
	'Alekuso_',
	'Rust lover',
	"I don't use Arch btw",
	'Non-binary',
	'Werkloos waalse'
];

export function getRandomText(): string {
	return bios[Math.floor(Math.random() * bios.length)];
}
