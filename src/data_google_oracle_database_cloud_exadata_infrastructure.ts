import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleOracleDatabaseCloudExadataInfrastructureArgs {
  cloud_exadata_infrastructure_id: string;
  location: string;
  project?: string;
}

export class data_google_oracle_database_cloud_exadata_infrastructure extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleOracleDatabaseCloudExadataInfrastructureArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_oracle_database_cloud_exadata_infrastructure", resourceName);
  }

  get cloud_exadata_infrastructure_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_exadata_infrastructure_id`;
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

  get entitlement_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.entitlement_id`;
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

  get properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.properties`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
