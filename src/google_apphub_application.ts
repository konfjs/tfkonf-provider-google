import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApphubApplicationArgsAttributesBusinessOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubApplicationArgsAttributesCriticality {
  type: string;
}

export interface GoogleApphubApplicationArgsAttributesDeveloperOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubApplicationArgsAttributesEnvironment {
  type: string;
}

export interface GoogleApphubApplicationArgsAttributesOperatorOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubApplicationArgsAttributes {
  business_owners?: GoogleApphubApplicationArgsAttributesBusinessOwners[];
  criticality?: GoogleApphubApplicationArgsAttributesCriticality;
  developer_owners?: GoogleApphubApplicationArgsAttributesDeveloperOwners[];
  environment?: GoogleApphubApplicationArgsAttributesEnvironment;
  operator_owners?: GoogleApphubApplicationArgsAttributesOperatorOwners[];
}

export interface GoogleApphubApplicationArgsScope {
  type: string;
}

export interface GoogleApphubApplicationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApphubApplicationArgs {
  application_id: string;
  description?: string;
  display_name?: string;
  location: string;
  attributes?: GoogleApphubApplicationArgsAttributes;
  scope: GoogleApphubApplicationArgsScope;
  timeouts?: GoogleApphubApplicationArgsTimeouts;
}

export class google_apphub_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApphubApplicationArgs) {
    const meta = {attributes:{isBlock:true,business_owners:{isBlock:true},criticality:{isBlock:true},developer_owners:{isBlock:true},environment:{isBlock:true},operator_owners:{isBlock:true}},scope:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apphub_application", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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
