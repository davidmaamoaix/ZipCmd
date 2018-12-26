let cellRaw = `
<div class="cell">
	<div class="entry-holder">
		<input type="text" placeholder="setblock ~ ~ ~ stone" class="entry">
	</div>
	<div class="delete" onclick="delete_cell()">
		<p class="btn-text">X</p>
	</div>
</div>
`;

var holder = document.getElementById('holder');

function addCell() {
	holder.appendChild(htmlNode(cellRaw));
}

function compile(){
	var entries = Array.from(document.getElementsByClassName('entry'));
	entries = entries.map(function(entry) {
		return entry.value;
	});

	// Cleanup cmds.
	entries.push('setblock ~ ~1 ~ command_block 0 0 {Command:\\"fill ~ ~-3 ~ ~ ~1 ~ air\\"}');
	entries.push('setblock ~ ~2 ~ redstone_block');
	entries.push('kill @e[type=commandblock_minecart,r=1]');

	// Wrapping cmds.
	entries = entries.map(function(entry) {
		return `{id:commandblock_minecart,Command:\"${entry}\"}`;
	});

	var out_cmd = entries.join(',');

	// Wrapping entire cmd.
	out_cmd = 'summon falling_block ~ ~1 ~ {Block:glass,Time:1,Passengers:[{\
		id:falling_block,Block:redstone_block,Time:1,Passengers:[{\
		id:falling_block,Block:activator_rail,Time:1,Passengers:[' + out_cmd + ']}]}]}'

	var output = window.open();
	output.document.write(`<p>${out_cmd}</p>`);
}

function htmlNode(html) {
	var temp = document.createElement('div');
	temp.innerHTML = html.trim();
	return temp.firstChild;
}

function delete_cell() {
	for (var i = 0; i < holder.children.length; i++) {
		if (hover(holder.children[i])) {
			holder.removeChild(holder.children[i]);
			return;
		}
	}
}

function hover(element) {
	return element.parentElement.querySelector(':hover') === element;
}

document.onload = function() {
	addCell();
} ();