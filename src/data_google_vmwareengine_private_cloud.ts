import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVmwareenginePrivateCloudArgs {
  location: string;
  name: string;
  project?: string;
}

export class data_google_vmwareengine_private_cloud extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleVmwareenginePrivateCloudArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vmwareengine_private_cloud", resourceName);
  }

  get deletion_delay_hours(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_delay_hours`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get hcx(): string {
    return `data.${this.resourceType}.${this.resourceName}.hcx`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get management_cluster(): string {
    return `data.${this.resourceType}.${this.resourceName}.management_cluster`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_config`;
  }

  get nsx(): string {
    return `data.${this.resourceType}.${this.resourceName}.nsx`;
  }

  get send_deletion_delay_hours_if_zero(): string {
    return `data.${this.resourceType}.${this.resourceName}.send_deletion_delay_hours_if_zero`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get uid(): string {
    return `data.${this.resourceType}.${this.resourceName}.uid`;
  }

  get vcenter(): string {
    return `data.${this.resourceType}.${this.resourceName}.vcenter`;
  }
}
