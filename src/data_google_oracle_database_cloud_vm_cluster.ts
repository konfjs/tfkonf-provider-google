import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleOracleDatabaseCloudVmClusterArgs {
  cloud_vm_cluster_id: string;
  location: string;
  project?: string;
}

export class data_google_oracle_database_cloud_vm_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleOracleDatabaseCloudVmClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_oracle_database_cloud_vm_cluster", resourceName);
  }

  get backup_subnet_cidr(): string {
    return `data.${this.resourceType}.${this.resourceName}.backup_subnet_cidr`;
  }

  get cidr(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr`;
  }

  get cloud_vm_cluster_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_vm_cluster_id`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get exadata_infrastructure(): string {
    return `data.${this.resourceType}.${this.resourceName}.exadata_infrastructure`;
  }

  get gcp_oracle_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.gcp_oracle_zone`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.properties`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
