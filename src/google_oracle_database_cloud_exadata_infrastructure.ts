import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOracleDatabaseCloudExadataInfrastructureArgsPropertiesCustomerContacts {
  email: string;
}

export interface GoogleOracleDatabaseCloudExadataInfrastructureArgsPropertiesMaintenanceWindow {
}

export interface GoogleOracleDatabaseCloudExadataInfrastructureArgsProperties {
  compute_count?: number;
  shape: string;
  storage_count?: number;
  customer_contacts?: GoogleOracleDatabaseCloudExadataInfrastructureArgsPropertiesCustomerContacts[];
  maintenance_window?: GoogleOracleDatabaseCloudExadataInfrastructureArgsPropertiesMaintenanceWindow;
}

export interface GoogleOracleDatabaseCloudExadataInfrastructureArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleOracleDatabaseCloudExadataInfrastructureArgs {
  cloud_exadata_infrastructure_id: string;
  display_name?: string;
  labels?: { [key: string]: string };
  location: string;
  properties?: GoogleOracleDatabaseCloudExadataInfrastructureArgsProperties;
  timeouts?: GoogleOracleDatabaseCloudExadataInfrastructureArgsTimeouts;
}

export class google_oracle_database_cloud_exadata_infrastructure extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleOracleDatabaseCloudExadataInfrastructureArgs) {
    const meta = {properties:{isBlock:true,customer_contacts:{isBlock:true},maintenance_window:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_oracle_database_cloud_exadata_infrastructure", resourceName);
  }

  get cloud_exadata_infrastructure_id(): string {
    return `${this.resourceType}.${this.resourceName}.cloud_exadata_infrastructure_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get entitlement_id(): string {
    return `${this.resourceType}.${this.resourceName}.entitlement_id`;
  }

  get gcp_oracle_zone(): string {
    return `${this.resourceType}.${this.resourceName}.gcp_oracle_zone`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
