import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterExclusionLabels {
  labels?: { [key: string]: string };
}

export interface GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterInclusionLabels {
  labels?: { [key: string]: string };
}

export interface GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterInventories {
  os_short_name: string;
  os_version?: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsInstanceFilter {
  all?: boolean;
  exclusion_labels?: GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterExclusionLabels[];
  inclusion_labels?: GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterInclusionLabels[];
  inventories?: GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterInventories[];
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsInventoryFilters {
  os_short_name: string;
  os_version?: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFileGcs {
  bucket: string;
  generation?: number;
  object: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFileRemote {
  sha256_checksum?: string;
  uri: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFile {
  allow_insecure?: boolean;
  local_path?: string;
  gcs?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFileGcs;
  remote?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFileRemote;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforce {
  args?: string[];
  interpreter: string;
  output_file_path?: string;
  script?: string;
  file?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFile;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFileGcs {
  bucket: string;
  generation?: number;
  object: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFileRemote {
  sha256_checksum?: string;
  uri: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFile {
  allow_insecure?: boolean;
  local_path?: string;
  gcs?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFileGcs;
  remote?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFileRemote;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidate {
  args?: string[];
  interpreter: string;
  output_file_path?: string;
  script?: string;
  file?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFile;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExec {
  enforce?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforce;
  validate: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidate;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFileGcs {
  bucket: string;
  generation?: number;
  object: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFileRemote {
  sha256_checksum?: string;
  uri: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFile {
  allow_insecure?: boolean;
  local_path?: string;
  gcs?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFileGcs;
  remote?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFileRemote;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFile {
  content?: string;
  path: string;
  state: string;
  file?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFile;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgApt {
  name: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSourceGcs {
  bucket: string;
  generation?: number;
  object: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSourceRemote {
  sha256_checksum?: string;
  uri: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSource {
  allow_insecure?: boolean;
  local_path?: string;
  gcs?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSourceGcs;
  remote?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSourceRemote;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDeb {
  pull_deps?: boolean;
  source: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSource;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgGooget {
  name: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs {
  bucket: string;
  generation?: number;
  object: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote {
  sha256_checksum?: string;
  uri: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSource {
  allow_insecure?: boolean;
  local_path?: string;
  gcs?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs;
  remote?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsi {
  properties?: string[];
  source: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSource;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs {
  bucket: string;
  generation?: number;
  object: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote {
  sha256_checksum?: string;
  uri: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSource {
  allow_insecure?: boolean;
  local_path?: string;
  gcs?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs;
  remote?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpm {
  pull_deps?: boolean;
  source: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSource;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgYum {
  name: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgZypper {
  name: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkg {
  desired_state: string;
  apt?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgApt;
  deb?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDeb;
  googet?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgGooget;
  msi?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsi;
  rpm?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpm;
  yum?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgYum;
  zypper?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgZypper;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryApt {
  archive_type: string;
  components: string[];
  distribution: string;
  gpg_key?: string;
  uri: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryGoo {
  name: string;
  url: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryYum {
  base_url: string;
  display_name?: string;
  gpg_keys?: string[];
  id: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryZypper {
  base_url: string;
  display_name?: string;
  gpg_keys?: string[];
  id: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepository {
  apt?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryApt;
  goo?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryGoo;
  yum?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryYum;
  zypper?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryZypper;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResources {
  id: string;
  exec?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExec;
  file?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFile;
  pkg?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkg;
  repository?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepository;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroups {
  inventory_filters?: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsInventoryFilters[];
  resources: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResources[];
}

export interface GoogleOsConfigOsPolicyAssignmentArgsOsPolicies {
  allow_no_resource_group_match?: boolean;
  description?: string;
  id: string;
  mode: string;
  resource_groups: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroups[];
}

export interface GoogleOsConfigOsPolicyAssignmentArgsRolloutDisruptionBudget {
  fixed?: number;
  percent?: number;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsRollout {
  min_wait_duration: string;
  disruption_budget: GoogleOsConfigOsPolicyAssignmentArgsRolloutDisruptionBudget;
}

export interface GoogleOsConfigOsPolicyAssignmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleOsConfigOsPolicyAssignmentArgs {
  description?: string;
  location: string;
  name: string;
  skip_await_rollout?: boolean;
  instance_filter: GoogleOsConfigOsPolicyAssignmentArgsInstanceFilter;
  os_policies: GoogleOsConfigOsPolicyAssignmentArgsOsPolicies[];
  rollout: GoogleOsConfigOsPolicyAssignmentArgsRollout;
  timeouts?: GoogleOsConfigOsPolicyAssignmentArgsTimeouts;
}

export class google_os_config_os_policy_assignment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleOsConfigOsPolicyAssignmentArgs) {
    const meta = {instance_filter:{isBlock:true,exclusion_labels:{isBlock:true},inclusion_labels:{isBlock:true},inventories:{isBlock:true}},os_policies:{isBlock:true,resource_groups:{isBlock:true,inventory_filters:{isBlock:true},resources:{isBlock:true,exec:{isBlock:true,enforce:{isBlock:true,file:{isBlock:true,gcs:{isBlock:true},remote:{isBlock:true}}},validate:{isBlock:true,file:{isBlock:true,gcs:{isBlock:true},remote:{isBlock:true}}}},file:{isBlock:true,file:{isBlock:true,gcs:{isBlock:true},remote:{isBlock:true}}},pkg:{isBlock:true,apt:{isBlock:true},deb:{isBlock:true,source:{isBlock:true,gcs:{isBlock:true},remote:{isBlock:true}}},googet:{isBlock:true},msi:{isBlock:true,source:{isBlock:true,gcs:{isBlock:true},remote:{isBlock:true}}},rpm:{isBlock:true,source:{isBlock:true,gcs:{isBlock:true},remote:{isBlock:true}}},yum:{isBlock:true},zypper:{isBlock:true}},repository:{isBlock:true,apt:{isBlock:true},goo:{isBlock:true},yum:{isBlock:true},zypper:{isBlock:true}}}}},rollout:{isBlock:true,disruption_budget:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_os_config_os_policy_assignment", resourceName);
  }

  get baseline(): string {
    return `${this.resourceType}.${this.resourceName}.baseline`;
  }

  get deleted(): string {
    return `${this.resourceType}.${this.resourceName}.deleted`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
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

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get revision_create_time(): string {
    return `${this.resourceType}.${this.resourceName}.revision_create_time`;
  }

  get revision_id(): string {
    return `${this.resourceType}.${this.resourceName}.revision_id`;
  }

  get rollout_state(): string {
    return `${this.resourceType}.${this.resourceName}.rollout_state`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }
}
