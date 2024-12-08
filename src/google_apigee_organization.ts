import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeOrganizationArgsPropertiesProperty {
  name?: string;
  value?: string;
}

export interface GoogleApigeeOrganizationArgsProperties {
  property?: GoogleApigeeOrganizationArgsPropertiesProperty[];
}

export interface GoogleApigeeOrganizationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeOrganizationArgs {
  analytics_region?: string;
  api_consumer_data_encryption_key_name?: string;
  api_consumer_data_location?: string;
  authorized_network?: string;
  control_plane_encryption_key_name?: string;
  description?: string;
  disable_vpc_peering?: boolean;
  display_name?: string;
  project_id: string;
  retention?: string;
  runtime_database_encryption_key_name?: string;
  runtime_type?: string;
  properties?: GoogleApigeeOrganizationArgsProperties;
  timeouts?: GoogleApigeeOrganizationArgsTimeouts;
}

export class google_apigee_organization extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeOrganizationArgs) {
    const meta = {properties:{isBlock:true,property:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_organization", resourceName);
  }

  get apigee_project_id(): string {
    return `${this.resourceType}.${this.resourceName}.apigee_project_id`;
  }

  get billing_type(): string {
    return `${this.resourceType}.${this.resourceName}.billing_type`;
  }

  get ca_certificate(): string {
    return `${this.resourceType}.${this.resourceName}.ca_certificate`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project_id(): string {
    return `${this.resourceType}.${this.resourceName}.project_id`;
  }

  get subscription_type(): string {
    return `${this.resourceType}.${this.resourceName}.subscription_type`;
  }
}
