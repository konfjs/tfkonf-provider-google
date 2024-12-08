import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApphubWorkloadArgsAttributesBusinessOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubWorkloadArgsAttributesCriticality {
  type: string;
}

export interface GoogleApphubWorkloadArgsAttributesDeveloperOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubWorkloadArgsAttributesEnvironment {
  type: string;
}

export interface GoogleApphubWorkloadArgsAttributesOperatorOwners {
  display_name?: string;
  email: string;
}

export interface GoogleApphubWorkloadArgsAttributes {
  business_owners?: GoogleApphubWorkloadArgsAttributesBusinessOwners[];
  criticality?: GoogleApphubWorkloadArgsAttributesCriticality;
  developer_owners?: GoogleApphubWorkloadArgsAttributesDeveloperOwners[];
  environment?: GoogleApphubWorkloadArgsAttributesEnvironment;
  operator_owners?: GoogleApphubWorkloadArgsAttributesOperatorOwners[];
}

export interface GoogleApphubWorkloadArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApphubWorkloadArgs {
  application_id: string;
  description?: string;
  discovered_workload: string;
  display_name?: string;
  location: string;
  workload_id: string;
  attributes?: GoogleApphubWorkloadArgsAttributes;
  timeouts?: GoogleApphubWorkloadArgsTimeouts;
}

export class google_apphub_workload extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApphubWorkloadArgs) {
    const meta = {attributes:{isBlock:true,business_owners:{isBlock:true},criticality:{isBlock:true},developer_owners:{isBlock:true},environment:{isBlock:true},operator_owners:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apphub_workload", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get discovered_workload(): string {
    return `${this.resourceType}.${this.resourceName}.discovered_workload`;
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

  get workload_id(): string {
    return `${this.resourceType}.${this.resourceName}.workload_id`;
  }

  get workload_properties(): string {
    return `${this.resourceType}.${this.resourceName}.workload_properties`;
  }

  get workload_reference(): string {
    return `${this.resourceType}.${this.resourceName}.workload_reference`;
  }
}
