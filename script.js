let cell = `
<div class="cell">
	<div class="entry-holder">
		<input type="text" placeholder="setblock ~ ~ ~ stone" class="entry">
	</div>
	<div class="delete">
		<p style="margin-top: 20px;">X</p>
	</div>
</div>
`;

var holder = document.getElementById('holder');

function addCell() {
	holder.innerHTML+=cell;
}

document.onload = addCell();