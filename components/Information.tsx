import { VNode } from "preact";

type AboutProps = {
  akey: string;
  avalue: string | VNode;
  aicon: VNode;
  iprop: string;
};

export default function Information(
  { akey, avalue, aicon, iprop }: AboutProps,
) {
  return (
    <div className="flex items-center py-2">
      <div className="flex items-center">
        {aicon}
        <p itemProp={iprop}>
          <b>{akey}:</b>
          {avalue}
        </p>
      </div>
    </div>
  );
}
