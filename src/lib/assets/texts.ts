export const bios = [
	'limited edition 24k gold labubu',
	'pansexual',
	'vrchat player',
	'brainrotted mf',
	'AlexTanukii',
	'Alekuso',
	'Alekuso_',
	'Rust lover',
	"I don't use Arch btw",
	'Non-binary',
	'Genderfluid',
	'Werkloos waalse'
];

export function getRandomText(): string {
	return bios[Math.floor(Math.random() * bios.length)];
}
