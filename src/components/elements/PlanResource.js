import { CheckCircle } from '@mui/icons-material';

const PlanResource = ({children}) => {
    return (
        <div className="plan-resource">
            <CheckCircle />
            {children}
        </div>
    );
}

export default PlanResource;