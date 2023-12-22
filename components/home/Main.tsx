// type MyProps = {
//     myCounter: number
// }

// export default function Main(Props: MyProps) {
//     return <main>主体内容: {Props.myCounter}</main>
// }

// export default function Main({ myCounter }: { myCounter: number }) {
//     return <main>主体内容: {myCounter}</main>
// }

export default function Main() {
  return (
    <main className="flex-1 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
      主体内容
    </main>
  );
}
