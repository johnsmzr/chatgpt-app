// type MyProps = {
//     myCounter: number
// }

// export default function Main(Props: MyProps) {
//     return <main>主体内容: {Props.myCounter}</main>
// }

export default function Main({ myCounter }: { myCounter: number }) {
    return <main>主体内容: {myCounter}</main>
}