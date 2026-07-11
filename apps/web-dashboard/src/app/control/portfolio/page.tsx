import { RealResourcePage } from '../../../components/control/real-resource-page';
import { configs } from '../../../lib/control-resource-config';

export default function Page() {
  return <RealResourcePage config={configs.portfolio} />;
}