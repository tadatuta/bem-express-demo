block('card')({
    addMods: node => ({ size: node.ctx.size }),
    content: (node, ctx) => [
        {
            elem: 'title',
            attrs: { style: `color: ${ctx.titleColor}` },
            content: ctx.title
        },
        {
            elem: 'content',
            content: [
                ctx.image ? {
                    elem: 'image',
                    url: ctx.image.replace('.png', '@3x.png')
                } : '',
                ctx.description
            ]
        }
    ]
});
