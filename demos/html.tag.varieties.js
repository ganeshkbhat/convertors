let htmlString = '<p><ElementNode>SomeWord<ElementNode/></ElementNode></p><ElementNode>SomeWord</ElementNode><ElementNode/><ElementNode>';

htmlString = 'SomeWord SomeWord<p><?xml html attrs="test"><ElementNode>SomeWord<ElementNode/><!tag htmls atrs="jdf"></ElementNode> SomeWord SomeWord </p><!-- --><ElementNode>SomeWord</ElementNode><ElementNode/>SomeWord SomeWord <ElementNode><!-- Testing new structure -->';

function extractElementNodesText(input) {
    const regex = /<\/?(\w+)(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*')))*\s*\/?>|([^<]*)/gs;
    const matches = Array.from(htmlString.matchAll(regex), m => m[0]);
    return matches;
}

function extractElementNodesText(input) {
    const regex = /<\/?(\w+)(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*')))*\s*\/?>|(<\?[\w\s=]*\?>|<!doctype [\w\s=]*>|<!--[\s\S]*?-->)/gis;
    const matches = Array.from(input.matchAll(regex), m => m[0]);
    return matches;
}

function extractElementNodesText(input) {
    const regex = /<\?[\w\s]*>|<!?[\w\s]*>|<\/?(\w+)(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*')))*\s*\/?>|<!--[\s\S]*?-->|([^<]*)/gs;
    const matches = Array.from(input.matchAll(regex), m => m[0].trim());
    return matches.filter(match => match !== '' && !match.startsWith('<?') && !match.startsWith('<!'));
}


console.log(extractElementNodesText(htmlString));



// // CORE JAVASCRIPT FUNCTION
// function extractElementNodes(htmlString) {
//     const regex = /<\w+>(\w+)?<\/\w+>|<\w+\/>/g;
//     const matches = htmlString.match(regex);
//     return matches;
// }

function extractElementNodes(htmlString) {
    const regex = /<(\w+)(?:>(\w+)<\/\w+>|\/)>/g;
    const matches = htmlString.match(regex);
    const elementNodes = {};

    if (matches) {
        matches.forEach(match => {
            const [tag, element] = match.split('>');
            const key = element || tag.slice(1, -2);

            if (!elementNodes[key]) {
                elementNodes[key] = tag;
            } else if (Array.isArray(elementNodes[key])) {
                elementNodes[key].push(tag);
            } else {
                elementNodes[key] = [elementNodes[key], tag];
            }
        });
    }

    return elementNodes;
}



// const htmlString = '<div><ElementNode>SomeWord</ElementNode><ElementNode/></div>';
// const elementNodes = extractElementNodes(htmlString);

// console.log(elementNodes); // ['<ElementNode>SomeWord</ElementNode>', '<ElementNode/>']
