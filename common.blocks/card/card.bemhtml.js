block('card')(
    elem('title')({
        tag: 'h2'
    }),
    elem('image')({
        tag: 'img',
        attrs: (node, ctx) => ({
            src: ctx.url
        })
    })
);
