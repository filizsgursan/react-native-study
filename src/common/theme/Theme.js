
export default function Theme() {

    return (
        {
            components: {
                Text:
                {
                    baseStyle:
                    {
                        textAlign: "left",
                    }
                },
                ScrollView: {
                    defaultProps: {
                        overScrollMode: "never",
                    },
                }

            }
        }
    )
}
