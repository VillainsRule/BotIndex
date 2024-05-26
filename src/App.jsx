import styles from './style.module.css';

export default function Main() {
    let bots = {
        'Confidence': {
            'ID': '6545821',
            'Owner': 'Death',
            'State': 'Inactive until Rewrite',
            'Functionality': 'Everything! Best bot (no bias).'
        },
        'Reliance': {
            'ID': '6793896',
            'Owner': 'acai',
            'State': 'Permanently Inactive',
            'Note': 'Renamed to @acai to reserve name.',
            'Functionality': 'Prioritized moderation, had a few fun games.'
        },
        'BSFC': {
            'ID': '9999999',
            'Owner': 'monkxy',
            'State': 'Deleted account; owner banned.',
            'Functionality': 'Personal bot for the Ben Stewart Fan Club clan.'
        },
        'Blu': {
            'Alt Names': 'SpookyBlu',
            'ID': '9960099',
            'Owner': 'monkxy / pablo',
            'State': 'Main developer banned; inactive forever.',
            'Functionality': 'Ripoff of Confidence when Death was banned.',
            'Note': 'Pablo apparently did not do any major contribution, monkxy only used his name to avoid ban.'
        },
        'MarriageBot': {
            'ID': '8656026',
            'Owner': 'Pablo',
            'State': 'Deleted account; project abandoned.',
            'Functionality': 'A port of the Discord MarriageBot'
        },
        'Courage': {
            'ID': '9237250',
            'Owner': 'monkxy',
            'State': 'Deleted account; owner banned.',
            'Functionality': 'Another Confidence ripoff. Confirmed such by Kipley.'
        },
        'Resolve': {
            'ID': '2847091',
            'Owner': 'alicialol',
            'State': 'Abandoned project; inactive account.',
            'Functionality': 'Included a value list for user reference.',
        },
        'Tranquility': {
            'ID': '6463853',
            'Owner': 'Unknown (see note)',
            'State': 'Inactive account; owner state unknown.',
            'Functionality': 'Unknown',
            'Explanation': 'Almost nothing is known about this bot except for the fact that it holds a Verified Bot badge. I failed to find any good research indicating any information regarding this bot, only a horde of messages potentially tied to the user @s that were unclear as to meaning. The functionality is also unknown, and there are almost no mentions or recollections of this bot being in chat across old members. It\'s possible this "s" user owned it, or possibly monkxy, juding from message contents. It has not been online since 10/23, so it is deemed "inactive", but owner state is unknown.'
        },
        'Spotify': {
            'ID': '5619683',
            'Owner': 'fristic / Death',
            'State': 'Deleted account; project dropped; owner left.',
            'Functionality': 'Generated Spotify songs, among other things.',
            'Explanation': 'This was a bot that was created in an all-afternoon voice call between Death and fristic (it lasted 5 painful hours) where Death taught fristic basic code and gave fristic the "Spotify" user to use as a demo. After requesting verified bot, it was used for around two hours before going inactive permanently. The account has almost no known evidence of existance inside the Blacket server, only containing a few screenshots and one /user command. Most evidence is in Death\'s DMs with fristic, which he refuses to reveal. At some point, this bot was deleted by Xotic.'
        },
        'NegroBot': {
            'ID': '5762345',
            'Owner': 'Loli',
            'State': 'Deleted account; owner banned.',
            'Functionality': 'Confidence ripoff intended to piss off Death.',
            'Story': 'This bot was created by a user named "Loli Overlord", who built it in of all things Python. After using Replit bot hosting to keep it up 24/7, it became a competitor to Confidence. After hours of arguments and threats, Death finally paid an unnamed mod to ban the bot for 6 weeks, angering Loli. After attempting to accuse Death of posting disgusting content, Death bribed another mod to ban Loli Overlord permanently from the server. The account "Loli Overlord" no longer exists on Discord, however the Blacket account Loli was logged into last in December 2023, which means it\'s hard to gague if they actually stayed away from the game.'
        }
    };

    return (
        <>
            <div className={styles.background}>
                <div className={styles.backgroundImage} />
            </div>

            <div className={styles.main}>
                <div className={styles.title}>Blacket Bot Index</div>
                <div className={styles.subtitle}>built by Death! 🪄</div>

                <ul className={styles.botList}>
                    {Object.entries(bots).map((entry) => (<>
                        <li className={styles.botName}>{entry[0]}</li>
                        <ul>{Object.entries(entry[1]).map((fact) => (<li className={styles.botFact}>{fact[0]}: {fact[1]}</li>))}</ul>
                    </>))}
                </ul>
            </div>
        </>
    )
}