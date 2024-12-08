import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleOracleDatabaseCloudVmClustersArgs {
  location: string;
  project?: string;
}

export class data_google_oracle_database_cloud_vm_clusters extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleOracleDatabaseCloudVmClustersArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_oracle_database_cloud_vm_clusters", resourceName);
  }

  get cloud_vm_clusters(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_vm_clusters`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }
}
