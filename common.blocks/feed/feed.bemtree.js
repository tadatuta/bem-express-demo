block('feed')({
    content: node => node.data.cards.map(card => ({
        block: 'card',
        ...card
    }))
});
