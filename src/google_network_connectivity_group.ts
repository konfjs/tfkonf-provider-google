import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkConnectivityGroupArgsAutoAccept {
  auto_accept_projects: string[];
}

export interface GoogleNetworkConnectivityGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkConnectivityGroupArgs {
  description?: string;
  hub: string;
  labels?: { [key: string]: string };
  name: string;
  auto_accept?: GoogleNetworkConnectivityGroupArgsAutoAccept;
  timeouts?: GoogleNetworkConnectivityGroupArgsTimeouts;
}

export class google_network_connectivity_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivityGroupArgs) {
    const meta = {auto_accept:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_connectivity_group", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get hub(): string {
    return `${this.resourceType}.${this.resourceName}.hub`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get route_table(): string {
    return `${this.resourceType}.${this.resourceName}.route_table`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
