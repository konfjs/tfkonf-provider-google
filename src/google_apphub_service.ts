import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApphubServiceArgsAttributesBusinessOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubServiceArgsAttributesCriticality {
  type: string;
}

export interface GoogleApphubServiceArgsAttributesDeveloperOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubServiceArgsAttributesEnvironment {
  type: string;
}

export interface GoogleApphubServiceArgsAttributesOperatorOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubServiceArgsAttributes {
  business_owners?: GoogleApphubServiceArgsAttributesBusinessOwners[];
  criticality?: GoogleApphubServiceArgsAttributesCriticality;
  developer_owners?: GoogleApphubServiceArgsAttributesDeveloperOwners[];
  environment?: GoogleApphubServiceArgsAttributesEnvironment;
  operator_owners?: GoogleApphubServiceArgsAttributesOperatorOwners[];
}

export interface GoogleApphubServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApphubServiceArgs {
  application_id: string;
  description?: string;
  discovered_service: string;
  display_name?: string;
  location: string;
  service_id: string;
  attributes?: GoogleApphubServiceArgsAttributes;
  timeouts?: GoogleApphubServiceArgsTimeouts;
}

export class google_apphub_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApphubServiceArgs) {
    const meta = {attributes:{isBlock:true,business_owners:{isBlock:true},criticality:{isBlock:true},developer_owners:{isBlock:true},environment:{isBlock:true},operator_owners:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apphub_service", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get discovered_service(): string {
    return `${this.resourceType}.${this.resourceName}.discovered_service`;
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

  get service_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_id`;
  }

  get service_properties(): string {
    return `${this.resourceType}.${this.resourceName}.service_properties`;
  }

  get service_reference(): string {
    return `${this.resourceType}.${this.resourceName}.service_reference`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
