import CogoToastEg from '@Atoms/CogoToastEg';
import GlassComp from '@Atoms/GlassComp';
import ReactCsv from '@Atoms/ReactCsv';
import AosDiv from '@Atoms/AosDiv';
import ReactQueryEg from '@Atoms/ReactQueryEg';

const SampleComponents = () => {
    return (
        <div className="container p-5">
            <CogoToastEg />
            <GlassComp />
            <ReactCsv />
            <ReactQueryEg />
            <AosDiv />
        </div>
    );
};

export default SampleComponents;
