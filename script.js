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
	alert('it worked!');
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