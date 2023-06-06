import { VNode } from "preact";

type AboutProps = {
    akey: string,
    avalue: string | VNode,
    aicon: VNode
}

export default function Information({ akey, avalue, aicon }: AboutProps) {
    return (
        <div className="flex items-center py-2">
            <div className="flex items-center">
                {aicon}
                <p><b>{akey}: </b>{avalue}</p>
            </div>
        </div>
    );
}