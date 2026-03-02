import { createClient } from '@sanity/client';

const client = createClient({
    projectId: '0racsf6r',
    dataset: 'production',
    token: 'skNolEqbR4bxW5GL9wsBJlySYlXACHkM46o7qx3N9oj4fIYisv650rlYbll8yV7vT7NkmipRySm8oNsK63nBjaqqlbho7EyrKUxiN5stuALvTd17xUrzwFW6Zf2ur6xNeX3RBv5f0JVBZfCbBmBaL5yCgALz9PP4Yn2PBWbBYvDSIUG617jL',
    apiVersion: '2024-01-01',
    useCdn: false,
});

const post = {
    _type: 'post',
    title: 'The Architecture of Influence: How The God Factor Shapes Public Narratives',
    slug: {
        _type: 'slug',
        current: 'architecture-of-influence-god-factor',
    },
    category: 'Corporate',
    featured: true,
    publishedAt: new Date().toISOString(),
    excerpt:
        'In an age of noise, the ability to cut through — to frame, position, and own a narrative — is the most valuable capability any brand or individual can possess. This is the work we do every day at The God Factor.',
    body: [
        {
            _type: 'block',
            _key: 'block1',
            style: 'normal',
            markDefs: [],
            children: [
                {
                    _type: 'span',
                    _key: 'span1',
                    marks: [],
                    text: 'In an era defined by fractured attention and relentless information overload, narrative architecture has become the highest form of strategic leverage. Brands that endure, individuals who lead, organisations that matter — they all share one thing in common: they control their story.',
                },
            ],
        },
        {
            _type: 'block',
            _key: 'block2',
            style: 'h2',
            markDefs: [],
            children: [
                {
                    _type: 'span',
                    _key: 'span2',
                    marks: [],
                    text: 'What Is Influence Architecture?',
                },
            ],
        },
        {
            _type: 'block',
            _key: 'block3',
            style: 'normal',
            markDefs: [],
            children: [
                {
                    _type: 'span',
                    _key: 'span3',
                    marks: [],
                    text: 'Influence architecture is the deliberate design of how a brand, personality, or institution is perceived across every touchpoint — from press coverage and social media to interpersonal encounters and policy rooms. It is not spin. It is not propaganda. It is the careful, sustained work of building trust at scale.',
                },
            ],
        },
        {
            _type: 'block',
            _key: 'block4',
            style: 'h2',
            markDefs: [],
            children: [
                {
                    _type: 'span',
                    _key: 'span4',
                    marks: [],
                    text: 'The God Factor Approach',
                },
            ],
        },
        {
            _type: 'block',
            _key: 'block5',
            style: 'normal',
            markDefs: [],
            children: [
                {
                    _type: 'span',
                    _key: 'span5',
                    marks: [],
                    text: 'At The God Factor, we operate at the intersection of strategic intelligence and creative excellence. Our approach begins not with tactics, but with truth: understanding what our client actually stands for, where they want to go, and what stands between them and that destination. From this clarity, we construct the narrative — and then we execute it with precision across every relevant channel.',
                },
            ],
        },
        {
            _type: 'block',
            _key: 'block6',
            style: 'normal',
            markDefs: [],
            children: [
                {
                    _type: 'span',
                    _key: 'span6',
                    marks: [],
                    text: 'We are not a religious organisation. We are a thinking brand — and our thinking exists to serve yours.',
                },
            ],
        },
    ],
};

client
    .create(post)
    .then((res) => {
        console.log('✅ Post created successfully!');
        console.log(`   ID: ${res._id}`);
        console.log(`   Title: ${res.title}`);
        console.log(`   Published: ${res.publishedAt}`);
        console.log('\n🔗 View it at: https://0racsf6r.sanity.studio');
    })
    .catch((err) => {
        if (err.statusCode === 403) {
            console.error('❌ Permission denied. The API token needs write access.');
            console.error('   Go to sanity.io/manage → API → Tokens → create a new Editor token.');
        } else {
            console.error('❌ Error:', err.message);
        }
    });
