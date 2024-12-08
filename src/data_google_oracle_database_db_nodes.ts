import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleOracleDatabaseDbNodesArgs {
  cloud_vm_cluster: string;
  location: string;
  project?: string;
}

export class data_google_oracle_database_db_nodes extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleOracleDatabaseDbNodesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_oracle_database_db_nodes", resourceName);
  }

  get cloud_vm_cluster(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_vm_cluster`;
  }

  get db_nodes(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_nodes`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }
}
