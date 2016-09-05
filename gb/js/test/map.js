<script>

'use strict';

var map = new Map([ ["name", "Nicholas"], ["title", "Author"]]);

console.log(map.has("name"));   // true
console.log(map.get("name"));   // "Nicholas"
console.log(map.has("title"));  // true
console.log(map.get("title"));  // "Author"
console.log(map.size);        // 2

</script>